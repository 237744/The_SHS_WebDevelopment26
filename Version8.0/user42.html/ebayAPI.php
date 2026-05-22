<?php
error_reporting(E_ALL);

// eBay API endpoint
$endpoint = 'https://svcs.ebay.com/services/search/FindingService/v1';

// API settings
$version = '1.0.0';

// PUT YOUR REAL APP ID HERE
$appid = 'YOUR_EBAY_APP_ID_HERE';

$globalid = 'EBAY-US';
$query = 'screwdrivers';
$safequery = urlencode($query);

// Filters
$filterarray = array(
    array(
        'name' => 'MaxPrice',
        'value' => '25',
        'paramName' => 'Currency',
        'paramValue' => 'USD'
    ),
    array(
        'name' => 'ListingType',
        'value' => array('AuctionWithBIN','FixedPrice')
    )
);

$i = 0;
$urlfilter = "";

// Build filter URL
foreach($filterarray as $itemfilter){
    foreach($itemfilter as $key => $value){
        if(is_array($value)){
            foreach($value as $j => $content){
                $urlfilter .= "&itemFilter($i).$key($j)=$content";
            }
        } else {
            if($value != ""){
                $urlfilter .= "&itemFilter($i).$key=$value";
            }
        }
    }
    $i++;
}

// API call
$apicall = "$endpoint?OPERATION-NAME=findItemsByKeywords"
    . "&SERVICE-VERSION=$version"
    . "&SECURITY-APPNAME=$appid"
    . "&GLOBAL-ID=$globalid"
    . "&keywords=$safequery"
    . "&paginationInput.entriesPerPage=20"
    . $urlfilter;

// Load response
$resp = @simplexml_load_file($apicall);

$results = "";

if($resp && $resp->ack == "Success"){

    foreach($resp->searchResult->item as $item){

        $pic = htmlspecialchars($item->galleryURL);
        $link = htmlspecialchars($item->viewItemURL);
        $title = htmlspecialchars($item->title);

        $results .= "
        <tr>
            <td><img src='$pic' width='80'></td>
            <td><a href='$link' target='_blank'>$title</a></td>
        </tr>";
    }

} else {
    $results = "<tr><td colspan='2'>No results found or API error.</td></tr>";
}
?>

<!DOCTYPE html>
<html>
<head>
<title>eBay Search Results</title>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">

<style>
body {
    font-family: Arial;
    background: #f4f6f9;
    padding: 20px;
}

table {
    width: 80%;
    margin: auto;
    background: white;
    border-radius: 10px;
    overflow: hidden;
}

td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}

h1 {
    text-align: center;
    margin-bottom: 20px;
}
</style>

</head>

<body>

<h1>eBay Search Results for "<?php echo htmlspecialchars($query); ?>"</h1>

<table>
    <?php echo $results; ?>
</table>

</body>
</html>