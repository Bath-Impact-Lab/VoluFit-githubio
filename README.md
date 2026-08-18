# VoluFit research page

Static academic project page for the VoluFit residual-limb morphology pilot study, following the conventional IRIS/Nerfies layout.

## Preview locally

From this directory, run:

```powershell
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Source material

The page summarises `../Residual_Limb_Paper.pdf`. The manuscript and citation are working drafts; update the author list, venue and BibTeX when these are confirmed. Replace `static/pdfs/residual-limb-paper.pdf` when the manuscript is updated.

The source demonstration movie, `../volufit.mov`, is converted to a web-ready 720p H.264/AAC file at `static/videos/volufit.mp4`. Re-run the conversion if the source movie changes.

## Deployment

The directory is self-contained and includes `.nojekyll`, so it can be published directly with GitHub Pages or copied to the project web root.
