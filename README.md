# Iterate AI Internship Assignment

This project is developed with vite, tested using jest, bundled using babel, set up with github actions workflows, and dockerized.

---
### Approach
- Icon Generation:\
Icon generation is made possible using Open AI's API, image to text, Dall-E-2 model, with additional prompts to generate icons specifically.

- Styling:\
Styling is handled using Tailwind CSS

- Testing:\
Testing is implemented using Jest, and Testing Library.

- Pipeline:\
CI\CD Pipeline configuration can be found in `workflows/tests.yml`. currently only automation upto testing on pushing to main branch is setup

- Deployment:\
Docker configuration is written for hosting on a linux server running Apache Nginx. Currently, the app is hosted on Vercel which deploys the app on push.
