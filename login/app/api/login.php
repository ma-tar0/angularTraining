<?php
$user=json_decode(file_get_contents('php://input'));  //get user from
if($user->mail=='amine' && $user->pass=='1234')
    print 'success';
else
    print 'error';
?>