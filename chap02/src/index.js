// 和require对区别
// import { count, add } from './calculator.js';
// console.log(count);
// add(2,3);
// console.log(count); // es6的模块导入的变量说对原有值对动态映射

import _ from 'lodash'
 
// 循环依赖
import foo from './foo.js'
foo('index.js')
