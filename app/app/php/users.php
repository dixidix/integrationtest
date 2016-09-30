<?php

$_POST = json_decode(file_get_contents('php://input'), true);

$method = $_SERVER['REQUEST_METHOD'];

$request = explode("/", substr(@$_SERVER['PATH_INFO'], 1));

switch ($method) {
  case 'PUT':
    echo "put";
    break;
  case 'POST':
    echo "post";
    break;
  case 'GET':
    echo "Get";
    break;
  case 'HEAD':
     echo "Head";
    break;
  case 'DELETE':
    echo "Delete";
    break;
  case 'OPTIONS':
     echo "Options";
    break;
  default:
     echo "Error";
    break;
}

?>