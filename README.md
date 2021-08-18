# Cygnet Node & React Training

## Videos
**Day 1**<br>
_Basics of Node JS, Express and Routes_<br>
[Download](https://drive.google.com/file/d/1v6f7BiqV-JDdgFZ27tqsQtbwPqJ4mGcl/view?usp=sharing)<br>

**Day 2**<br>
_Server side validation and ORM integration in express_<br>
[Download](https://drive.google.com/file/d/1bbj5w9vlrVO-ZcRd83pi8wZ4-bVEQzFB/view?usp=sharing)<br>

**Day 3**<br>
_React Basics: Component, State, Props_<br>
[Download](https://drive.google.com/file/d/13x09OPMbYEfoEzY1up3slGSkFQdMkkgc/view?usp=sharing)<br>

**Day 4**<br>
_React API Integration_<br>
[Download](https://drive.google.com/file/d/1H216N1KN4gEtAy0uxHPjJ3GY36yYCkb0/view?usp=sharing)<br>

**Day 5**<br>
_Functinal Testing in Node Js and Express_<br>
[Download](https://drive.google.com/file/d/1mJ0tM2bO-S3r8rPC3WlmbS97gGSUhlqE/view?usp=sharing)<br>


## Useful commands

  _Express_<br>
  
 ```
      npm init --yes 
      npm i express
      npm i body-parser
      npm i cors
      npm i -g nodemon
      npm i -D jest supertest
      set NODE_ENV=production
  ```
   
  _Sequalize ORM_<br>
    
 ```
        npm i sequelize
        npm install mysql2 --save

        npm install --save-dev sequelize-cli
        npx sequelize-cli init
        npx sequelize-cli model:generate --name TODOS --attributes text:string(500),completed:boolean
        npx sequelize-cli seed:generate --name todos

        npx sequelize-cli db:migrate
        npx sequelize-cli db:migrate:undo

        npx sequelize-cli db:seed:all
        npx sequelize-cli db:seed --seed 20210725080301-todos.js
        npx sequelize-cli db:seed:undo:all
        npx sequelize-cli db:seed:undo --seed 20210725080301-todos.js
        
        npx sequelize db:migrate --env unitTest
        
        
   ```
   
   ## Refrences
   [Sequelize Migrations](https://sequelize.org/master/manual/migrations.html)<br>
   [Sequelize Types](https://sequelize.org/v5/manual/data-types.html)<br>
   [Sequelize Model](https://sequelize.org/master/class/lib/model.js~Model.html)
