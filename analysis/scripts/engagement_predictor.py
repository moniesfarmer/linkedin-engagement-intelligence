"""
engagement_predictor.py
-----------------------
LinkedIn Engagement Prediction Script
Author: Solomon Uche | AI Evaluator & Data Scientist

Usage:
    python engagement_predictor.py --post_type Educational --word_count 250 --hashtag_count 7

Predicts the expected engagement rate for a LinkedIn post before publishing.
"""

import argparse
import joblib
import json
import numpy as np
import pandas as pd
from pathlib import Path

MODEL_PATH = Path(__file__).parent.parent.parent / "models" / "engagement_predictor_v1.pkl"
METRICS_PATH = Path(__file__).parent.parent.parent / "models" / "model_metrics.json"


def load_model():
    """Load trained engagement prediction model."""
    if not MODEL_PATH.exists():
        raise FileNotFoundError(
            f"Model not found at {MODEL_PATH}. "
            "Run analysis/notebooks/05_modeling.ipynb first to train the model."
        )
    return joblib.load(MODEL_PATH)


def build_feature_vector(post_attrs: dict, feature_columns: list) -> pd.DataFrame:
    """
    Build a feature vector from post attributes.
    
    Args:
        post_attrs: Dictionary of post attributes
        feature_columns: List of feature column names from training
    
    Returns:
        DataFrame with one row matching training feature schema
    """
    # Derived features
    post_attrs['hashtag_density'] = post_attrs.get('hashtag_count', 0) / max(post_attrs.get('word_count', 1), 1)

    # One-hot encode categoricals
    cat_cols = ['post_type', 'content_format', 'day_of_week', 'time_of_day', 'topic_category', 'hook_type']
    row = {}

    for col in feature_columns:
        if col in post_attrs:
            row[col] = post_attrs[col]
        else:
            # Check if it's a one-hot encoded column
            matched = False
            for cat in cat_cols:
                prefix = f"{cat}_"
                if col.startswith(prefix):
                    val = col.replace(prefix, "")
                    row[col] = 1 if post_attrs.get(cat) == val else 0
                    matched = True
                    break
            if not matched:
                row[col] = 0

    return pd.DataFrame([row])


def predict_engagement(post_attrs: dict) -> dict:
    """
    Predict engagement rate for a LinkedIn post.
    
    Args:
        post_attrs: Dictionary of post attributes
    
    Returns:
        Dictionary with prediction and interpretation
    """
    model = load_model()

    # Load feature columns from metrics
    with open(METRICS_PATH) as f:
        metrics = json.load(f)
    feature_columns = metrics['features']

    # Build feature vector
    X = build_feature_vector(post_attrs, feature_columns)

    # Predict
    predicted_rate = model.predict(X)[0]
    predicted_rate = max(0, predicted_rate)  # Clip to non-negative

    # Interpret
    if predicted_rate < 0.005:
        tier = "Below Average"
        advice = "Consider revising the hook, adding a stronger CTA, or switching to a List format."
    elif predicted_rate < 0.01:
        tier = "Average"
        advice = "Solid foundation. Try adding a personal story element or making it more data-driven."
    elif predicted_rate < 0.02:
        tier = "Good"
        advice = "This post should perform well. Consider adding it to your best day/time slot."
    else:
        tier = "Excellent 🔥"
        advice = "High potential post. Schedule for Tuesday or Wednesday morning for maximum reach."

    return {
        "predicted_engagement_rate": round(predicted_rate, 4),
        "predicted_engagement_pct": f"{round(predicted_rate * 100, 2)}%",
        "performance_tier": tier,
        "recommendation": advice,
        "post_attributes": post_attrs
    }


def main():
    parser = argparse.ArgumentParser(description="Predict LinkedIn post engagement rate")
    parser.add_argument("--post_type", type=str, default="Educational",
                        choices=["Announcement","Educational","Insight","Career","Resource","Reflection","Interactive"])
    parser.add_argument("--word_count", type=int, default=200)
    parser.add_argument("--hashtag_count", type=int, default=7)
    parser.add_argument("--has_cta", type=bool, default=True)
    parser.add_argument("--content_format", type=str, default="List",
                        choices=["List","Story","Poll","Debate","Short"])
    parser.add_argument("--day_of_week", type=str, default="Tuesday",
                        choices=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"])
    parser.add_argument("--time_of_day", type=str, default="Morning",
                        choices=["Morning","Afternoon","Evening"])
    parser.add_argument("--topic_category", type=str, default="AI",
                        choices=["AI","DataScience","Career","SQL","Mindset","Tools"])
    parser.add_argument("--hook_type", type=str, default="Statement",
                        choices=["Question","Statement","Statistic","Story"])
    parser.add_argument("--series_post", type=bool, default=False)
    parser.add_argument("--month", type=int, default=3)

    args = parser.parse_args()
    post_attrs = vars(args)

    print("\n" + "="*55)
    print("  🔮 LinkedIn Engagement Predictor — Solomon Uche")
    print("="*55)

    result = predict_engagement(post_attrs)

    print(f"\n📊 Predicted Engagement Rate: {result['predicted_engagement_pct']}")
    print(f"📈 Performance Tier: {result['performance_tier']}")
    print(f"💡 Recommendation: {result['recommendation']}")
    print("\n📝 Post Settings Used:")
    for k, v in post_attrs.items():
        print(f"   {k}: {v}")
    print("="*55 + "\n")


if __name__ == "__main__":
    main()
