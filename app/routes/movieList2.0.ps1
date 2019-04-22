$movieList = @()
$movieDir = "C:\Data\Movies\*"
$date = Get-Date -Format G
$movieFile = "C:\Users\Administrator\app\routes\movieList.txt"

Clear-Content $movieFile

for($i=0; $i -lt (Get-ChildItem $movieDir -File -Recurse -Exclude "*.txt","*.srt","*.jpg","*.ass","*.nfo").Length;$i++){
#    $movieList += $(Get-ChildItem $movieDir)[$i].Name 
    
    if($movieList[$i] -Match '^\w*.+(?=.\d\d\d\d)'){
        $movieList[$i] = "<tr><td>" + ($Matches[0] -Replace '\.',' ') + "</td><td>" + $(Get-ChildItem $movieDir)[$i].CreationTime + "</td></tr>"
    }
    else{
        $movieList[$i] = "<tr><td>" + ($Matches[0] -Replace '\.',' ') + "</td><td>" + $(Get-ChildItem $movieDir)[$i].CreationTime + "</td></tr>"
    }
}

"Movie List as of: $date <br /> <Table border='1'><tr><th><b>Movie Name</b></th><th><b>First added</b></th></tr>" | Out-File -FilePath $movieFile -Append -NoClobber -Encoding utf8
$movieList | Out-File -FilePath $movieFile -Append -NoClobber -Encoding utf8
"</Table>" | Out-File -FilePath $movieFile -Append -NoClobber -Encoding utf8


#not like .txt .srt .jpg .ass .nfo


for($i=0; $i -lt (Get-ChildItem $movieDir -File -Recurse -Exclude "*.txt","*.srt","*.jpg","*.ass","*.nfo").Length;$i++){
    $movieList += (Get-ChildItem $movieDir -File -Recurse -Exclude "*.txt","*.srt","*.jpg","*.ass","*.nfo")[$i]
}
