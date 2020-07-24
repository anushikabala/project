var total = 0
var play = false
function display(element) {
var now = new Date()
if (!play) {
play = true
startTime = now.getTime()
}
if (now.getTime() - startTime > 20000) {
element.checked = !element.checked
return
}
 if (element.checked)
total++
else
total--
element.form.num.value = total
}
function restart(form) {
total = 0
play = false
for (var i = 1; i <= 100; ++i) {
 form.elements[i].checked = false
   }
}
function exit()
{
       location.replace ("games.html") 
}