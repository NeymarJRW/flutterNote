
// 1.fluttertoast 弹框提示
//   install  fluttertoast: ^3.1.0;
//   import 'package:fluttertoast/fluttertoast.dart';
  // 用法: Fluttertoast.showToast(
  //       msg: "Added Successfully",
  //       toastLength: Toast.LENGTH_SHORT,
  //       gravity: ToastGravity.CENTER,
  //       timeInSecForIos: 1, //多久关闭
  //       backgroundColor: Colors.black,
  //       textColor: Colors.white,
  //       fontSize: 20.0
  //       );


// 2. shared_preferences 本地存储,类似于h5的localstorage;
    // install shared_preferences: ^0.4.2;
    // import 'package:shared_preferences/shared_preferences.dart';
    // 用法:  getdata(title) async {
        //         SharedPreferences prefs = await SharedPreferences.getInstance();
        //         prefs.remove(title);
        //         List list = new List();
        //         prefs.clear()
        //         prefs
        //           .getKeys()
        //           .toList()
        //           .forEach((f) => {
        //             list.add(prefs.getStringList(f))
        //           });
         //         }



// 3. event_bus 跨组件传值,用于更改全局状态
//    event_bus: ^1.1.0
// import 'package:event_bus/event_bus.dart';
//用法 
// (1)新建event.dart文件 初始化
      // import 'package:event_bus/event_bus.dart';

      // //Bus初始化
      // EventBus eventBus = EventBus();

      // class UserThemeEvent {
      //   String text;
      //   UserThemeEvent(String text) {
      //     this.text = text;
      //   }
      // }
//(2)创建监听器
  // void _listen() {
  //   eventBus.on <UserThemeEvent> ().listen((event) {
  //      print(event.text);
  //       setState(() {
  //       });
  //   });
  // }

//(3) 发送事件,此时监听器函数会执行
// eventBus.fire(new UserThemeEvent(texts));


//4. provider 全局状态管理 类似于vue中的vuex
//install   provider: ^3.1.0
//import 'package:provider/provider.dart';

//用法
 //(1) 新建provider.dart来创建要全局管理的state 
    // import 'package:flutter/material.dart';
    // class Counter with ChangeNotifier {
    //   String _title = 'data'; 直接赋予初始值
    //   Counter(this._title) 传参赋予初始值
    //   void change() {
    //        _title='data2'
    //       此方法中可以写关于对_title的赋新值的操作代码
    //   }
    //   get title => _title; 
    //   在外部想获取_title的值时,使用title,get方法,title返回的值为_title;
    // }

//(2)在main.dart 根组件外包裹一层ChangeNotifierProvider
// import 'package:provider/provider.dart';
// import './provider.dart'; //第一步中定义的Counter,引入后才可以包裹根组件
//之前:   void main() => runApp(MyApp());
//修改之后: 
      // void main() => runApp(
      //     ChangeNotifierProvider <Counter>.value(
      //      value: Counter(),
      //      child: MyApp(),
      // ));

// (3)在组件中使用值,或者修改值
  // Text(Provider.of<Counter>(context).title)  取值
  // Provider.of<Counter>(context).change(); 调取Counter中的方法来修改定义的_title的值

// 5.在fluuter中使用webview
// 首先在info.plist中添加
    	// <key>io.flutter.embedded_views_preview</key>
	    // <true/>
      // <key>NSAppTransportSecurity</key>
      // <dict>
      // 	<key>NSAllowsArbitraryLoads</key>
      // 	<true/>
      // 	<key>NSAllowsArbitraryLoadsInWebContent</key>
      // 	<true/>
      // </dict>

    //(1)引用外部链接  webview_flutter: ^0.3.13
    // String url;
    // @override
    // void initState() {
    //   super.initState();
    //   url = 'http://test.877337.com/20190902/32/';
    // }

    // @override
    // Widget build(BuildContext context) {
    //   return Scaffold(
    //       body: SafeArea(

    //           child: Container(
    //             padding: EdgeInsets.all(0),
    //               width: double.infinity,
    //               height: double.infinity,
    //               child: WebView(
    //                 initialUrl: url,
    //                 javascriptMode: JavascriptMode.unrestricted,
    //               ))));
    // }

    // (2)引用本地文件夹

    // 先引用总目录,然后引用文件夹中的第一子目录
    //  - assets/game/
    //  - assets/game/images/
    //  - assets/game/media/
    //  flutter_webview_plugin: ^0.3.7
    //  jaguar_flutter_asset: ^2.2.0
    // @override
    // void initState() {
    //   super.initState();
    //   _initServer();
    // }

    // _initServer() async {
    //   final server = Jaguar(address: "127.0.0.1", port: 8080);
    //   server.addRoute(serveFlutterAssets());
    //   await server.serve(logRequests: true);
    //   server.log.onRecord.listen((r) => debugPrint("==serve-log：$r"));
    //   setState(() {
    //   });
    // }
    // @override
    // Widget build(BuildContext context) {
    //   return WebviewScaffold(
    //     withJavascript: true,
    //     url: 'http://127.0.0.1:8080/game/index.html',
    //   );
    // }

    // 6.应用打开显示界面然后跳转
    // import 'package:flutter/material.dart';
    // import "../index/index.dart";
    // class StartPage extends StatefulWidget {
    //   StartPage({
    //     Key key
    //   }): super(key: key);

    //   _StartPageState createState() => _StartPageState();
    // }

    // class _StartPageState extends State < StartPage > with SingleTickerProviderStateMixin {
    //   AnimationController _controller;
    //   Animation _animation;
    //   @override
    //   void initState() {
    //     super.initState();
    //     _controller =
    //       AnimationController(vsync: this, duration: Duration(milliseconds: 2500));
    //     _animation = Tween(begin: 1.0, end: 1.0).animate(_controller);

    //     _animation.addStatusListener((status) {
    //       if (status == AnimationStatus.completed) {
    //         Navigator.of(context).pushAndRemoveUntil(
    //           MaterialPageRoute(builder: (context) => Index()),
    //           (route) => route == null);
    //       }
    //     });
    //     _controller.forward();
    //   }

    //   @override
    //   void dispose() {
    //     _controller.dispose();
    //     super.dispose();
    //   }

    //   @override
    //   Widget build(BuildContext context) {
    //     return FadeTransition(
    //       opacity: _animation,
    //       child: Image.asset('images/start.jpg',
    //         scale: 2.0,
    //         fit: BoxFit.cover,
    //       ),
    //     );
    //   }
    // }
