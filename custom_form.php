<?php
function logs($txt = "")
{
  try{
    $fp = fopen(__DIR__ . "/log_new.txt", "a"); // Открываем файл в режиме записи
    if(is_array($txt)){

      fwrite($fp,"\n". date("d-m-Y_H:i:s")." -- > ".print_r($txt,TRUE));

    }else{
      fwrite($fp,"\n". date("d-m-Y_H:i:s")." -- > ".$txt);
    }


    fclose($fp); //Закрытие файла
  }catch (Exception $e) { return false; }

  return true;
}

if(isset($_POST['city']) && isset($_POST['connect']) && isset($_POST['number'])){
  logs('Пришло');
  $typeConnect='';
  switch ($_POST['connect']){
  case 'phone':
    $typeConnect='Номер телефона';
    break;
  case 'viber':
    $typeConnect='Номер телефона Viber';
    break;
  case 'whatsApp':
    $typeConnect='Номер телефона WatsApp';
    break;
  case 'vk':
    $typeConnect='Страница Вконтакте';
    break;
  default:
    $typeConnect='';
    break;
}

$to  = "senditoy@yandex.ru" ;
$subject = "Письмо со странице http://франшиза.костюмерка74.рф/rukovodstvo ";



$message = ' 
<html> 
    <head> 
        <title>Письмо со странице http://франшиза.костюмерка74.рф/rukovodstvo</title> 
    </head> 
    <body> 
      <h3>Письмо со странице http://франшиза.костюмерка74.рф/rukovodstvo</h3>
        <p>'.$typeConnect.': '.$_POST['number'].'</p> 
        <p>Город: '.$_POST['city'].'</p>
    </body> 
</html>';
  $headers  = "Content-type: text/html; charset=UTF-8 \r\n";
  $headers .= "From: http://франшиза.костюмерка74.рф/rukovodstvo <Demento174@yandex.ru>\r\n";
  $headers .= "Bcc: <Demento174@yandex.ru>\r\n";
  try {
    mail($to, "the subject", $message,$headers);

  } catch (Exception $e) {
    logs('Выброшено исключение: ',  $e->getMessage(), "\n");
  }


}
