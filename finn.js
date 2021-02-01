<!DOCTYPE html>
<html>
<body>

<script>
const s = urlParams.get('s')

var commonWords =["rose", "gold", "gb", "256", "128", "64", "32", "16", "(", ")", "#"];
var SourceStr   = s;
SourceStr = SourceStr.toLowerCase();

//--- Kill (most) non-alphas, and the keywords replace with tab.
var zRegEx      = eval ('/([^0-9a-z\' ]+)|\\s*\\b(' + commonWords.join ("|") + ')\\b\\s*/ig');
var sPhraseList = SourceStr.replace (zRegEx, '\t');

//-- Trim empty results and leading and trailing delimiters.
sPhraseList     = sPhraseList.replace (/ *\t+ */g, ', '). replace (/, ?, ?/g, ', ');
sPhraseList     = sPhraseList.replace (/(^[, ]+)|([, ]+$)/g, '');

//-- Make optional array:
aPhraseList     = sPhraseList.split (/, */g);

document.getElementById('demo').innerHTML = sPhraseList.toString();
</script>

<p id="demo"></p>

</body>
</html> 
