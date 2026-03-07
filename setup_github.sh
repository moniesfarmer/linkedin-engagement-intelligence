#!/bin/bash
# =============================================================
# LinkedIn Engagement Intelligence — GitHub Setup Script
# Author: Solomon Uche
# =============================================================
# This script:
#   1. Initializes a local Git repo
#   2. Creates a PRIVATE GitHub repo via GitHub CLI
#   3. Pushes all project files
#
# PREREQUISITES:
#   - GitHub CLI installed: https://cli.github.com/
#   - Authenticated: run `gh auth login` first
#
# USAGE:
#   chmod +x setup_github.sh
#   ./setup_github.sh
# =============================================================

set -e  # Exit on any error

REPO_NAME="linkedin-engagement-intelligence"
REPO_DESCRIPTION="LinkedIn brand analytics & engagement prediction system — data collection, EDA, ML modeling, and content strategy automation"

echo ""
echo "============================================================"
echo "  🚀 LinkedIn Engagement Intelligence — GitHub Setup"
echo "============================================================"
echo ""

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    echo "❌ GitHub CLI not found. Install it from: https://cli.github.com/"
    echo "   Then run: gh auth login"
    exit 1
fi

# Check if authenticated
if ! gh auth status &> /dev/null; then
    echo "❌ Not authenticated with GitHub. Run: gh auth login"
    exit 1
fi

echo "✅ GitHub CLI found and authenticated"
echo ""

# Initialize git repo
echo "📁 Initializing git repository..."
git init
git add .
git commit -m "🎉 Initial commit — LinkedIn Engagement Intelligence System

- Full project structure with data schema
- EDA and predictive modeling notebooks
- Engagement predictor script
- Content calendar for March 2026
- README with full project documentation
- requirements.txt and project roadmap"

echo ""
echo "🔒 Creating private GitHub repository: $REPO_NAME..."

# Create private GitHub repo and push
gh repo create "$REPO_NAME" \
    --private \
    --description "$REPO_DESCRIPTION" \
    --source=. \
    --remote=origin \
    --push

echo ""
echo "============================================================"
echo "  ✅ SUCCESS! Repository created and pushed."
echo "============================================================"
echo ""
echo "  🔗 View your repo:"
gh repo view --web 2>/dev/null || echo "  https://github.com/$(gh api user -q .login)/$REPO_NAME"
echo ""
echo "  📋 Next steps:"
echo "  1. Add your LinkedIn engagement data to: data/raw/post_metrics.csv"
echo "  2. Run: jupyter notebook analysis/notebooks/02_eda.ipynb"
echo "  3. After 50+ posts, run: analysis/notebooks/05_modeling.ipynb"
echo "  4. Use: python analysis/scripts/engagement_predictor.py --help"
echo ""
echo "============================================================"
