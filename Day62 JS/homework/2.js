// 3) დაწერეთ მაგალითი სადაც გამოყენებული იქნება var, let და const ცვლადები. კომენტარებით ახსენით რით განსხვავდებიან ისინი ერთმანეთისგან და როგორია მათი მოქმედების არეალი: გლობალური, ლოკალური (ფუნქციის) და ბლოკის ფარგლები. აგრეთვე შექმენით მაგალითი ლექსიკური ფარგლების მუშაობისას და კომენტარებით ახსენით რას ნიშნავს ლექსიკური ფარგლები და როგორ მუშაობს ცვლადების ხილვადობა შიდა და გარე ფუნქციებში

//let - vkmnit cvlads da es aris globaluri - gamoyeneba sheidzleba yveldan da shecvlac
//const - vkmnit cvlads esec aris globaluri - gamoyeneba sheidzleba yvelgan magram shecvla ara
//var - vkmnit cvlads es aris lokaluri - gamoyeneba sheileba mxolod mis kvebis blokshi an kvemot
//-----magalitebi----
function varScope(){
    var x = 5;
}
varScope()
console.log(x) // argamoitans 

