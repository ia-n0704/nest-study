import * as path from 'path';
import {DataSource} from 'typeorm';

export const dataSource=new DataSource({
    type:'mysql',
    host:'localhost',
    port:3306,
    database:'fire',
    username:'root',
    password:'@shwodnjs123',
    entities:[
        path.join(__dirname,'src/entities/**/*.entity.ts'),
        path.join(__dirname,'dist/entities/**/*.entity.js'),
    ],
    synchronize:false,
    logging:true,
});