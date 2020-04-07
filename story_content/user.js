function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5tk8IDrklxL":
        Script1();
        break;
      case "5iiDzhIiVdS":
        Script2();
        break;
      case "6hrDieXn51D":
        Script3();
        break;
      case "6rc4bn6xq8D":
        Script4();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script3()
{
  $("#tab-customlink").show();
}

function Script4()
{
  window.print();
}

