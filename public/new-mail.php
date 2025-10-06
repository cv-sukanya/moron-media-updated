<?php
if (mail("sukanya@chronicleventures.com", "Test", "Testing PHP mail()")) {
    echo "Mail sent!";
} else {
    echo "Mail failed!";
}
?>
