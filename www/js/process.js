let process = {
  menu:function(){
    let content = <div className="page">
      <iframe src="http://192.168.0.102" width="100%" height="100%"></iframe>
    </div>;
    ReactDOM.render(content,document.getElementById('root'));
  },
  loading:function(){
    let content = <div>
          Loading...
        </div>;
    ReactDOM.render(content,document.getElementById('root'));
  }
}

process.loading();
setTimeout(function(){
  process.menu();
},7000);