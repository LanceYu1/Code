$(function() {
            // 初始化右侧滚动条
            // 这个方法定义在scroll.js中
            resetui()


            // 将用户输入的内容渲染到聊天窗口
            // 1.为发送按钮添加绑定事件
            $('.input_sub').on('click', function() {
                    // console.log('点击了');
                    // 2.获取输入框中的内容
                    var text = $('.input_txt').val();
                    // console.log($('.input_txt').val());
                    // 3.将文本框中的内容渲染到页面上
                    // 3.1先生成一个内容框用来存储新的消息
                    $('.talk_list').append('<li class="right_word"> <
                        img src = "img/person02.png" / > < span > 你好哦 < /span> <
                        /li>')
                        // $('right_word')

                    })

            })