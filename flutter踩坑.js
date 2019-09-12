//1.去除右上角debug图案
    // return MaterialApp(
    //   debugShowCheckedModeBanner: false,
    // );

//2.定时器 
        // import 'dart:async';
        // Timer backlast = new Timer(Duration(seconds: 1),(){
        // // Navigator.pop(context);
        // });

//3.随机数
// int randomnum = Random().nextInt(9) + 1;


//4.TextField赋予默认值 
  //   TextEditingController phoneController;

  //   void _textFieldChanged(String str) {
  //     setState(() {
  //       datetitle = str;
  //     });
  //   }
  //   void initState() {
  //     super.initState();
  //     phoneController = TextEditingController.fromValue(TextEditingValue(text: '默认值'));
  //   }
  // TextField(
  // controller: phoneController,
  //   keyboardType: TextInputType.text,
  //   decoration: InputDecoration(
  //     // contentPadding: EdgeInsets.all(10.0),
  //     labelText: 'Please enter the title',
  //   ),
  //   onChanged: _textFieldChanged,
  //   autofocus: false,
  // ),
  

  //5.导航切换
  // class HomePage extends StatefulWidget {
  //   // HomePage({Key key}) : super(key: key);

  //   _HomePageState createState() => _HomePageState();
  // }

  // class _HomePageState extends State <HomePage> with SingleTickerProviderStateMixin {
  //     TabController controller;
  //     @override
  //     void initState() {
  //       controller = new TabController(length: 3, vsync: this);
  //     }
  //     @override
  //     void dispose() {
  //       controller.dispose();
  //       super.dispose();
  //     }
  //     @override
  //     Widget build(BuildContext context) {
  //       return MaterialApp(
  //         routes: <String, WidgetBuilder> {
  //           '/home': (BuildContext context) => new PlanList(),
  //           '/add': (BuildContext context) => new MyPage(),
  //         },
  //         debugShowCheckedModeBanner: false,
  //         title: flutter',
  //         home: Scaffold(
  //           resizeToAvoidBottomInset: false,
  //           appBar: AppBar(
  //             title: Text('${Provider.of<Counter>(context).title}'),
  //           ),
  //           body: TabBarView(
  //             controller: controller,
  //             children: <Widget> [PlanList(), AddPlan(), MyPage()], //切换的三个页面 对应下方tabbar的三个icon
  //           ),
  //           bottomNavigationBar: Material(
  //             color: colors,
  //             child: TabBar(
  //               controller: controller,
  //               labelColor: Colors.white,
  //               unselectedLabelColor: Colors.white60,
  //               tabs: <Widget> [
  //                 new Tab(
  //                   text: "Plan",
  //                   icon: Icon(Icons.assessment),
  //                 ),
  //                 new Tab(
  //                   text: "Add",
  //                   icon: Icon(Icons.add_alert),
  //                 ),
  //                 new Tab(
  //                   text: "Setting",
  //                   icon: Icon(Icons.build),
  //                 ),
  //               ],
  //             ),
  //           ),
  //         ),
  //       );
  //     }
  //   }


  // 6.不规则底部导航
        // floatingActionButton: FloatingActionButton(
        //     backgroundColor: Color(0xff232d37),
        //     onPressed: () {
     
        //     },
        //     tooltip: '添加',
        //     child: Icon(
        //       Icons.add,
        //       color: Colors.white,
        //       size: 35,
        //     ),
        //   ),
        //   floatingActionButtonLocation: FloatingActionButtonLocation.centerDocked,
        //   bottomNavigationBar: BottomAppBar(
        //     color: Color(0xff232d37),
        //     shape: CircularNotchedRectangle(), //关键!!!!
        //     child: Row(
        //       children: <Widget> [
        //         Expanded(
        //           child: Container(
        //             padding: EdgeInsets.only(top: 5.0),
        //             height: 50,
        //             child: FlatButton(
        //               onPressed: () {
        //                 setState(() {
        //                   _currentindex = 0;
        //                 });
        //               },
        //               child: Column(
        //                 children: <Widget> [
        //                   Icon(Icons.list,
        //                     color: _currentindex == 0 ?
        //                     Colors.white :
        //                     Colors.white54),
        //                   Text(
        //                     'list',
        //                     style: TextStyle(
        //                       color: _currentindex == 0 ?
        //                       Colors.white :
        //                       Colors.white54),
        //                   )
        //                 ],
        //               ),
        //             )),
        //           flex: 1,
        //         ),
        //       ],
        //     ),
        //   ),


// 7.底部下滑弹出
//    showModalBottomSheet(
//      context: context,
//      builder: (BuildContext context) {
//        return Container(
//          height: 400,
//          padding: EdgeInsets.symmetric(horizontal: 30.0),
    
//          );
//      });

// 8.底部弹出ios风格按钮
            // showCupertinoModalPopup(
            //   context: context,
            //   builder: (BuildContext context) {
            //     return CupertinoActionSheet(
            //       cancelButton: CupertinoActionSheetAction(
            //         onPressed: () {
            //           Navigator.pop(context);
            //         },
            //         child: Text('cancle'),
            //       ),
            //       actions: < Widget > [
            //         CupertinoActionSheetAction(
            //           onPressed: () {
            //             Navigator.pop(context);
            //           },
            //           child: Text('data'),
            //         ),
            //         CupertinoActionSheetAction(
            //           onPressed: () {
            //             Navigator.pop(context);
            //           },

            //           child: Text('data'),
            //         ),
            //       ],
            //     );
            //   });


// 9.路由跳转
          //   Navigator.push(context,
          //     new MaterialPageRoute(builder: (BuildContext context) {
          //       return DakaPage(item: item);
          //     })).then((onValue) {
          //     onValue='true'
          //   });


          // DakaPage页面返回时传值,onvlue接收值
          //  Navigator.of(context).pop('true');
