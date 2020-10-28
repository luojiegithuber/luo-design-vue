<template>
    <div class="container">
        <div id="left-div">
            <div id="left-div1">
                <table>
                    <tr>
                        <th class="tr"><div class="left-table1-th">ID</div></th>
                    </tr>
                </table>
            </div>
            <div id="left-div2">
                <table id="left-table2">
                    <tr v-for="(item, index) in dataList_1" :key="index"><td class="td"><div class="left-table2-tr">{{item}}</div></td></tr>
                </table>
            </div>
        </div>
        <div id="right-div">
            <div id="right-div1">
                <table id="right-table1">
                    <tr>
                        <!-- 表头 -->
                        <th class="th" v-for="(item, index) in th_list" :key="index">{{ item }}</th>
                    </tr>
                </table>
            </div>
            <div id="right-div2">
                <table id="right-table2">
                    <tr class="right-table2-tr" v-for="(items, index) in dataList_2" :key="index">
                       <td class="td" v-for="(item, index2) in items" :key="index2">{{ item }}</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>

</template>
<script>
import $ from 'jquery'
export default {
  name : 'MobileTable', 
  data () {
    return {
      fixed_th_list: 'ID',
      th_list: ['姓名','年龄','性别','年收入','岗位','个性签名'],
      dataList_1: [],
      dataList_2: [],
    }
  },

  created(){
    for(let i=0;i<20;i++ ){
        this.dataList_1.push(i)
        this.dataList_2.push(['罗杰',21,'男','400000','前端开发工程师','要大笑，要做梦，要与众不同！'])
    }
    this.dataList_1.push('123124111111234444444444444444444444444444444443213424332421342341234231412341234231')
    this.dataList_2.push(['罗杰',21,'男','400000','前端开发',''])

  },

  mounted(){
    // console.log('屏幕宽度',window.screen.width)
    let offsetHeightList = []; // 保存表格每一层最高单元格的高度
    const leftTableTr = $('.left-table2-tr');
    const rightTableTr = $('.right-table2-tr');

    // 初始化高度
    offsetHeightList = Array.prototype.map.call(leftTableTr,elem=>{
        return elem.offsetHeight;
    })

    // 比较高度，最高高度成型
    rightTableTr.height(function(index,oldheight){
        let maxHeight = 0;

        if(oldheight >= offsetHeightList[index]){
            maxHeight = oldheight;
        }else{
            maxHeight = offsetHeightList[index];
        }

        offsetHeightList[index] = maxHeight;

        return maxHeight;
    })

    // 左边取最高高度
    leftTableTr.height(function(index){
        return offsetHeightList[index];
    })


    $('#right-div2').on('scroll',function(){
        let top=$(this).scrollTop();
        let left=$(this).scrollLeft();
        $('#left-div2').scrollTop(top);
        $('#right-div1').scrollLeft(left);
    })

  }

}
</script>
<style rel="stylesheet/less" lang="less">
        *{
            margin:0;
            padding: 0;
        }
        table{
            width:100%;
            //text-align:center;
            border-collapse:collapse;
            border-spacing:0;
            table-layout:fixed;
            word-break:break-all
        }
        table td{
            word-wrap:break-word; 
        }
        .container{
            width: 100vw;
            height: 50vh;
            padding: 0;
            box-sizing: border-box;
            display: flex;
            overflow: hidden;
        }
        #left-div{
            width: 20vw;
            // min-width: 100px;
            z-index: 10;
            box-shadow: 0 0 5px #888888;
            min-width: 100px;
            //float: left;
            //border: 1px solid blue;
        }
        #left-div1{
            
            width: 20vw;
            z-index: 10;
            
        }
        #left-div2{
            width: 20vw;
            height: calc(50vh - 50px);
            overflow: hidden;
            z-index: 10;
        }
        #left-table2{
            width: 100%;
            //margin-bottom: 4px;
        }
        #right-div{
            //float: left;
            width: 80vw;
            //border: 1px solid red;
            overflow: scroll;
        }
        #right-div1{
            width: 80vw;
            //height: 10vh;
            overflow: hidden;
        }
        #right-div2{
            width: 80vw;
            height: calc(50vh - 50px);
            overflow: auto;
        }
        #right-table1{
            //width: 1000px;
        }
        #right-table2{
            //width: 1000px;
            overflow: auto;
        }
        td{
            height: 50px;
            width: 100px;
            // line-height: 50px;
            overflow: hidden;
            //text-align: center;
        }
        th{
            height: 50px;
            width: 100px;
            overflow: hidden;
            //text-align: center;
            color: #1E304F;
            background-color: #F3F8FF;
        }
        .left-table1-th{
            width: 20vw;
            min-width: 100px;
        }
        #left-div2{
            width: 20vw;
            min-width: 100px;
        }
        .left-table2-tr{
            text-align: center;
            width: 20vw;
            min-width: 100px;
        }
        td{
            min-width: 100px;
            color: #384967;
        }
        tr{
            background: #FFFFFF;
        }
        tr:nth-of-type(odd){
            background: #E7F2FF;
        }
        /*可以美化一下滚动条*/
        // #right-div2::-webkit-scrollbar {/*滚动条整体样式*/
        //     width: 4px;
        //     height: 4px;
        // }
        // #right-div2::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
        //     border-radius: 5px;
        //     box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        //     background: rgba(0,0,0,0.2);
        // }
        // #right-div2::-webkit-scrollbar-track {/*滚动条里面轨道*/
        //     box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
        //     border-radius: 0;
        //     background: rgba(0,0,0,0.1);
        // }

</style>