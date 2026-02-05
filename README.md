diff --git a/README.md b/README.md
index 16c3c7b424b2a3a60953202a4e64effc2efa3ee1..6310b5206f252f2721582240ad9791a5915114be 100644
--- a/README.md
+++ b/README.md
@@ -1,7 +1,20 @@
-# GitHub Codespaces ♥️ Jupyter Notebooks
+# Python Data Science Notebook Playground
 
-Welcome to your shiny new codespace! We've got everything fired up and running for you to explore Python and Jupyter notebooks.
+This repository started as a lightweight environment for Jupyter notebook experiments.
+It now also includes a launch-ready static marketing website for `vintagetrips.com`.
 
-You've got a blank canvas to work on from a git perspective as well. There's a single initial commit with what you're seeing right now - where you go from here is up to you!
+## Included Website (VintageTrips)
 
-Everything you do here is contained within this one codespace. There is no repository on GitHub yet. If and when you’re ready you can click "Publish Branch" and we’ll create your repository and push up your project. If you were just exploring then and have no further need for this code then you can simply delete your codespace and it's gone forever.
+Files at the repository root:
+
+- `index.html`: SEO-friendly landing page content and structure.
+- `styles.css`: Responsive styling and component visuals.
+- `script.js`: Mobile menu and newsletter form interaction.
+
+### Run locally
+
+```bash
+python3 -m http.server 8000
+```
+
+Then open `http://localhost:8000`.
