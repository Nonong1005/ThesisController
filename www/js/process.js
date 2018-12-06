let process = {
  menu:function(){
    let content = <div className="page">
      <iframe src="http://192.168.0.102" width="100%" height="100%" onerror={process.error()}></iframe>
    </div>;
    ReactDOM.render(content,document.getElementById('root'));
  
  },
  error:function(){
    let content = <div className="page">
    <h3>The server is unavailable. Check if the device is connected to the Router.</h3>
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
},2000);