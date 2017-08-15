/**
 * 使用mockjs来mock数据, 提供mock数据API接口
 */
import Mock from 'mockjs'
import cities from './cities.json'
import catListData from './catListData.json'
import catData from './catData.json'



//注册接口
Mock.mock('/api/getsheng',{
  code: 0,
  data: cities
})
Mock.mock('/api/category/cat',{
  code: 0,
  data: catListData
})
Mock.mock('/api/catData',{
  code: 0,
  data: catData
})

// 不用export
