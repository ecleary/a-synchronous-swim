(function() {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here
  //
  // Declare function "ajaxGetSwimCommnad"
  const ajaxGetSwimCommnad = () => {
    // Call the jQuery ajax method and pass in an object literal with the following properties
    $.ajax({
      // type prop. with value of "GET"
      type: "GET",
      // url prop. with value of serverURL
      url: serverUrl,
      // success method
        // Invoke SwimTeam move method with received commnad/direction
      success: (commnad) => {
        SwimTeam.move(commnad);
      }
    });
  };
  setInterval(ajaxGetSwimCommnad, 500);
  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////
  // ajaxFielUplaod(somefile);
  const ajaxFileUplaod = (file) => {
    var formData = new FormData();
    formData.append('file', file);
    $.ajax({
      type: 'POST',
      data: formData,
      url: 'FILL_ME_IN',
      cache: false,
      contentType: false,
      processData: false,
      success: () => {
        // reload the page
        window.location = window.location.href;
      }
    });
  };

  $('form').on('submit', function(e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;
    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
