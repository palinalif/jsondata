<?php
if(!empty($_POST['user_id'])){
    $arr = array();

    include "dbConnect.php";
    try
    {
        $sql = 'SELECT id, name, email, phone, join_date FROM people WHERE id = :id';
        $s = $pdo->prepare($sql);
        $s->bindValue(':id', $_POST['user_id']);
        $s->execute();
    }
    catch (PDOException $e)
    {
        $error = 'Error fetching user details.' . $e->getMessage();
        include "error.php";
        exit();
    }

    if($s->rowCount() > 0){
        $result = $s->fetch();
        $arr['status'] = "ok";
        $arr['result'] = $result;
    }else{
        $arr['status'] = 'err';
        $arr['result'] = '';
    }

    //returns data as JSON format
    echo json_encode($arr);
}
?>