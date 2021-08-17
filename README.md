# Cygnet Node & React Training

## Videos
**Day 1**<br>
_Basics of Node JS, Express and Routes_<br>
[Download](https://cipl2014-my.sharepoint.com/:v:/g/personal/manthan_patel_cygnetinfotech_com/ERxky-0E9OtHjKNGitp9YloBSQvWdFSPDouYdXgeEl0MhA)<br>

**Day 2**<br>
_Server side validation and ORM integration in express_<br>
[Download](https://cipl2014-my.sharepoint.com/:v:/g/personal/manthan_patel_cygnetinfotech_com/ESqxBtHaXAtHrIv9CABIlrgBuqBsO0zboynDBs3NKm784Q)<br>

**Day 3**<br>
_React Basics: Component, State, Props_<br>
[Download](https://drive.google.com/file/d/13x09OPMbYEfoEzY1up3slGSkFQdMkkgc/view?usp=sharing)<br>

**Day 4**<br>
_React API Integration_<br>
[Download](https://drive.google.com/file/d/1H216N1KN4gEtAy0uxHPjJ3GY36yYCkb0/view?usp=sharing)<br>

## Useful commands

  _Express_<br>
  
 ```
      npm init --yes 
      npm i express
      npm i body-parser
      npm i cors
      npm i -g nodemon
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
        
   ```
   
   ## Refrences
   [Sequelize Migrations](https://sequelize.org/master/manual/migrations.html)<br>
   [Sequelize Types](https://sequelize.org/v5/manual/data-types.html)<br>
   [Sequelize Model](https://sequelize.org/master/class/lib/model.js~Model.html)
