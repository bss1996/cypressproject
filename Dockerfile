From cypressproject:13.6.3
WORKDIR /home/bhawani/cypressproject/cypressproject/cypress
Maintainer bhawani
copy package*.json package.json
Run npm install 
CMD ["npm","run", "npx cypress run"]
