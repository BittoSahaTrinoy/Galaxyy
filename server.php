<?php


$conn = mysqli_connect('localhost:3306','root', 'root', 'galaxy_new');
if(!$conn){
  echo"<center><h1>Connection error!!!!!!!</h1></center>";
}

if(isset($_POST["post"])){
  $title = $_POST["title"];
  $desc = $_POST["desc"];
  $link = $_POST["link"];
  $key = $_POST["keyword"];
  $image = $_POST["image"];
  
  $sql = "INSERT INTO addnew(title, description, link, keywords, image) VALUES('$title', '$desc', '$link', '$key', '$image')";
  
  mysqli_query($conn, $sql);
  echo("okkkkk done!!!!!");
  
  
  
}



?>