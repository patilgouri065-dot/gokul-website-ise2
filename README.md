# Gokul Dairy Website — DevOps & Kubernetes ISE–2

> **Academic demo:** This is an original student website concept created for an ISE–2 assignment. It is not an official Gokul Dairy website and is not affiliated with or endorsed by any dairy organisation. Product cards and the contact form are illustrative; the form does not send or store data.

## 1. Project introduction

The Gokul Dairy Website is a responsive informational website concept designed to introduce dairy products, explain quality-conscious practices, and provide a simple contact-form demonstration. The goal is to practise front-end website development alongside Git/GitHub version control and a basic CI/CD workflow using GitHub Actions.

### Objectives
- Create a unique, responsive multi-section website.
- Use semantic HTML, custom CSS and JavaScript.
- Track work through meaningful Git commits.
- Use GitHub Actions to validate website files and deploy the site to GitHub Pages.
- Maintain screenshots and project documentation in this README.

## 2. Features

- Responsive navigation with a mobile menu.
- Hero section and project introduction.
- CSS-drawn product illustrations for milk, curd and butter.
- Quality-principles section.
- Contact form with client-side validation and demo feedback.
- Accessible labels, focus styles, skip link and reduced-motion support.
- GitHub Actions workflow for basic validation and GitHub Pages deployment.

## 3. Technology stack

| Technology / tool | Purpose |
| --- | --- |
| HTML5 | Page structure and semantic content |
| CSS3 | Responsive layout, typography, colours and illustrations |
| JavaScript | Mobile navigation, current year and demo form interaction |
| Git | Local version control and commit history |
| GitHub | Remote repository and collaboration history |
| GitHub Actions | Automated checks and deployment workflow |
| GitHub Pages | Hosting the static website |

No framework or package installation is required for local use. The optional web fonts load from Google Fonts; system fallbacks are included.

## 4. Project structure

```text
gokul-website-ise2/
├── .github/
│   └── workflows/
│       └── pages.yml
├── assets/
├── .gitignore
├── index.html
├── styles.css
├── script.js
└── README.md
```

## 5. How to run the website locally

### Option A — Open directly
1. Download or clone this repository.
2. Open the project folder.
3. Double-click `index.html` to open it in your browser.

### Option B — Run a local server (recommended)
If Python is installed, open a terminal in the project folder and run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in your browser. Stop the server with `Ctrl+C`.

## 6. Git and GitHub setup

### Install/check Git
Install Git from https://git-scm.com/downloads if needed. Then check:

```bash
git --version
```

Configure your name and email (use the email associated with your GitHub account if appropriate):

```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

### Create a GitHub repository
1. Sign in at https://github.com.
2. Create a new repository named `gokul-website-ise2`.
3. For the easiest first push, create it **without** a README, licence or `.gitignore` because these files are already in this project.
4. Copy the repository's HTTPS URL.

### Initialise and push
Run these commands from inside the extracted project folder. To make the required five meaningful commits without inventing history, add the project files in logical groups. Replace the remote URL with your own repository URL.

```bash
git init
git branch -M main

git add index.html
git commit -m "feat: create Gokul website structure"

git add styles.css
git commit -m "style: add responsive dairy theme"

git add script.js
git commit -m "feat: add interactive navigation and form"

git add .github/workflows/pages.yml
git commit -m "ci: add GitHub Actions validation and deployment"

git add README.md .gitignore assets/README.txt
git commit -m "docs: document setup and assignment evidence"

git remote add origin https://github.com/YOUR-USERNAME/gokul-website-ise2.git
git push -u origin main
```

These are five separate commits, each containing a meaningful part of the project. Git tracks the files as they are added in each commit. If your instructor expects the commit history to show changes made over time rather than initial project components, make further genuine edits after this setup (for example, improve a product description, refine mobile spacing, or add an accessibility improvement), then commit and push each change.

## 7. Minimum five meaningful changes and commit history

The five setup commits above meet the minimum count if your faculty accepts logical project-component commits. To strengthen the evidence, make at least one additional real improvement after the initial push. Do not create fake commits or screenshots.

| Step | Meaningful change | Suggested commit message |
| --- | --- | --- |
| 1 | Add semantic HTML layout | `feat: create Gokul website structure` |
| 2 | Add responsive styling and CSS illustrations | `style: add responsive dairy theme` |
| 3 | Add mobile menu and contact form behaviour | `feat: add interactive navigation and form` |
| 4 | Add GitHub Actions validation and deployment | `ci: add GitHub Actions validation and deployment` |
| 5 | Document setup, workflow and evidence checklist | `docs: document setup and assignment evidence` |
| 6 (recommended) | Make a real visible improvement and test it | `fix: improve mobile accessibility` |

For an additional change, edit and save a file first, then run commands such as:

```bash
git status
git add styles.css
git commit -m "fix: improve mobile accessibility"
git push
```

Use the file you actually changed (`index.html`, `styles.css`, `script.js`, or the workflow). Check the changes before committing with `git diff`. View your real commit history with:

```bash
git log --oneline --decorate
```

A commit records a snapshot locally; `git push` sends commits to GitHub. Take a screenshot of the actual repository commit history after you have made the required changes.

## 8. GitHub Actions and GitHub Pages integration

The workflow file is `.github/workflows/pages.yml`.

### What the workflow does
1. Starts on pushes to `main`, pull requests targeting `main`, and manual runs.
2. Checks out the repository.
3. Verifies that `index.html`, `styles.css` and `script.js` exist.
4. Checks for basic HTML document markers.
5. For pushes to `main` and manual runs, uploads the site and deploys it to GitHub Pages.
6. Pull requests run validation but do not deploy.

This is a lightweight CI/CD demonstration. The validation checks are intentionally basic; they are not a full HTML standards validator or a security audit.

### Enable GitHub Pages
1. Push the project to GitHub.
2. Open the repository's **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions** as the source if the option is shown.
4. Open the **Actions** tab.
5. Select **Validate and Deploy Gokul Website** and inspect the latest run.
6. Wait for the validation and deployment jobs to complete successfully.
7. Open the deployment URL shown in the workflow run or in **Settings → Pages**.

The workflow requests the `pages: write` and `id-token: write` permissions needed for Pages deployment. Repository or organisation policies may restrict Actions; if a run fails, read its logs and resolve the reported issue rather than claiming success.

### How to demonstrate CI/CD
1. Change a visible sentence in `index.html`.
2. Save the file, then commit and push the change.
3. Open **Actions** and select the new workflow run.
4. Confirm the validation job passes and, for a push to `main`, the deployment job completes.
5. Open the live Pages URL and confirm the change appears.

## 9. Screenshot evidence checklist

Save your own screenshots in an `evidence/` folder if your instructor permits it, or insert them below in this README. Do not use sample or fabricated screenshots.

| No. | Screenshot to capture | Suggested caption |
| --- | --- | --- |
| 1 | Website top/hero section in a browser | Figure 1: Gokul website home page |
| 2 | Products and quality sections | Figure 2: Website content sections |
| 3 | Website in a narrow/mobile browser view | Figure 3: Responsive mobile layout |
| 4 | GitHub repository main page showing files | Figure 4: Project repository and file structure |
| 5 | GitHub commit history with at least five meaningful commits | Figure 5: Git version-control history |
| 6 | GitHub Actions workflow with validation job passed | Figure 6: Automated validation successful |
| 7 | GitHub Actions deployment job completed and Pages URL | Figure 7: CI/CD deployment result |
| 8 | Live GitHub Pages website | Figure 8: Deployed website output |

### Add screenshots to README
Create a folder named `evidence` in your repository and add your screenshots there. Then add Markdown such as:

```markdown
## 10. Evidence screenshots

### Figure 1: Website home page
![Website home page](evidence/01-home-page.png)

### Figure 2: GitHub repository
![GitHub repository](evidence/02-repository.png)

### Figure 3: Commit history
![Git commit history](evidence/03-commits.png)

### Figure 4: GitHub Actions result
![GitHub Actions workflow](evidence/04-actions-success.png)

### Figure 5: GitHub Pages deployment
![Deployed website](evidence/05-live-site.png)
```

Use the exact filenames you actually save. Include the other screenshots in the same way.

## 10. Testing checklist

- [ ] Website opens without a missing-file error.
- [ ] All navigation links move to the correct section.
- [ ] Mobile menu opens and closes.
- [ ] Contact fields require a name, valid email and message.
- [ ] Submitting the demo form shows a clear message and does not claim to send an email.
- [ ] Layout is readable at desktop and mobile widths.
- [ ] At least five meaningful commits are visible on GitHub.
- [ ] Workflow validation passes.
- [ ] GitHub Pages deployment succeeds and the live site opens.
- [ ] README includes the real screenshot evidence.

## 11. Troubleshooting

**`git` is not recognised:** Install Git, reopen the terminal and check `git --version`.

**Push rejected:** Check that the remote URL is correct and that you have permission to push. If the remote repository already contains commits, inspect the message and follow the appropriate pull/reconciliation steps; do not force-push blindly.

**Workflow is not running:** Confirm `.github/workflows/pages.yml` is on the `main` branch and inspect repository Actions settings.

**Pages deployment fails:** Check the failing step in the Actions logs, verify Pages is configured to use GitHub Actions, and check repository permissions/policies.

**Website changes are not visible:** Confirm the commit was pushed, the deployment job succeeded, and refresh the Pages URL.

## 12. Conclusion

This project demonstrates static website development, responsive design, JavaScript interactions, Git/GitHub version control, automated validation and a basic GitHub Actions deployment pipeline. The workflow makes website updates repeatable and provides visible evidence of the build-and-deploy process.

---

**Student details to complete before submission**
- Student name: `[Your name]`
- Roll number: `[Your roll number]`
- Class / department: `[Your class and department]`
- Subject: DevOps and Kubernetes
- Assignment: ISE–2
- GitHub repository URL: `[Paste your repository URL]`
- Deployed website URL: `[Paste your GitHub Pages URL after deployment]`
