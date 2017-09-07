<?php
    include $_SERVER['DOCUMENT_ROOT'] . '/nemendur/palinalif/skolahysing.com/db/dbConnect.php';
    try{
        $sql = 'INSERT INTO people SET name = :name, email = :email, phone = :phone';
        $s = $pdo->prepare($sql);
        $s->bindValue(':name', $_POST['name']);
        $s->bindValue(':email', $_POST['email']);
        $s->bindValue(':phone', $_POST['phone']);
        $s->execute();
    }
    catch (PDOException $e) {
        $error = 'Error adding submitted category.';
        include $_SERVER['DOCUMENT_ROOT'] . '/nemendur/palinalif/skolahysing.com/error/error.php';
        exit();
    }
    header("Location: index.html");
?>