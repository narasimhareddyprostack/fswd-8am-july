import React, { Component } from "react";
import Display from "./Display";
class Employee extends Component {
  employees = [{"id":1,"first_name":"Diann","last_name":"Ratcliff","email":"dratcliff0@webs.com","gender":"Polygender"},
  {"id":2,"first_name":"Curcio","last_name":"Bompass","email":"cbompass1@dell.com","gender":"Male"},
  {"id":3,"first_name":"Christye","last_name":"Boerderman","email":"cboerderman2@nymag.com","gender":"Male"},
  {"id":4,"first_name":"Darda","last_name":"Lisciandro","email":"dlisciandro3@miitbeian.gov.cn","gender":"Non-binary"},
  {"id":5,"first_name":"Novelia","last_name":"Lutas","email":"nlutas4@springer.com","gender":"Female"},
  {"id":6,"first_name":"Othello","last_name":"Ohm","email":"oohm5@livejournal.com","gender":"Non-binary"},
  {"id":7,"first_name":"Marris","last_name":"Wildbore","email":"mwildbore6@github.com","gender":"Bigender"},
  {"id":8,"first_name":"Laural","last_name":"Bengal","email":"lbengal7@google.de","gender":"Agender"},
  {"id":9,"first_name":"Sergio","last_name":"Wasling","email":"swasling8@businessinsider.com","gender":"Genderfluid"},
  {"id":10,"first_name":"Dulcie","last_name":"Saffrin","email":"dsaffrin9@spotify.com","gender":"Genderfluid"},
  {"id":11,"first_name":"Meggi","last_name":"Bernholt","email":"mbernholta@seesaa.net","gender":"Non-binary"},
  {"id":12,"first_name":"Jermaine","last_name":"Lyall","email":"jlyallb@baidu.com","gender":"Bigender"},
  {"id":13,"first_name":"Wilton","last_name":"Ruffell","email":"wruffellc@godaddy.com","gender":"Female"},
  {"id":14,"first_name":"Abbie","last_name":"Shuker","email":"ashukerd@ed.gov","gender":"Female"},
  {"id":15,"first_name":"Blaire","last_name":"Coorington","email":"bcooringtone@squidoo.com","gender":"Genderqueer"},
  {"id":16,"first_name":"Roch","last_name":"Walenta","email":"rwalentaf@shareasale.com","gender":"Agender"},
  {"id":17,"first_name":"Hillie","last_name":"Tommis","email":"htommisg@senate.gov","gender":"Genderfluid"},
  {"id":18,"first_name":"Claus","last_name":"Giraudat","email":"cgiraudath@flickr.com","gender":"Non-binary"},
  {"id":19,"first_name":"Vanny","last_name":"Murkin","email":"vmurkini@bloomberg.com","gender":"Genderqueer"},
  {"id":20,"first_name":"Genovera","last_name":"McColl","email":"gmccollj@sfgate.com","gender":"Agender"},
  {"id":21,"first_name":"Rosaline","last_name":"Beccero","email":"rbeccerok@icio.us","gender":"Genderqueer"},
  {"id":22,"first_name":"Flossi","last_name":"De Lascy","email":"fdelascyl@newsvine.com","gender":"Genderfluid"},
  {"id":23,"first_name":"Astrix","last_name":"Costa","email":"acostam@comcast.net","gender":"Non-binary"},
  {"id":24,"first_name":"Mal","last_name":"Lantuffe","email":"mlantuffen@shutterfly.com","gender":"Polygender"},
  {"id":25,"first_name":"Karoline","last_name":"Hearfield","email":"khearfieldo@theatlantic.com","gender":"Non-binary"},
  {"id":26,"first_name":"Culver","last_name":"Dagg","email":"cdaggp@fastcompany.com","gender":"Genderfluid"},
  {"id":27,"first_name":"Georgeta","last_name":"Eckford","email":"geckfordq@canalblog.com","gender":"Male"},
  {"id":28,"first_name":"Casie","last_name":"MacFaul","email":"cmacfaulr@cisco.com","gender":"Bigender"},
  {"id":29,"first_name":"Kassi","last_name":"Ferry","email":"kferrys@wunderground.com","gender":"Male"},
  {"id":30,"first_name":"Charlotte","last_name":"Kinze","email":"ckinzet@patch.com","gender":"Non-binary"},
  {"id":31,"first_name":"Blanche","last_name":"Cathro","email":"bcathrou@blogs.com","gender":"Genderqueer"},
  {"id":32,"first_name":"Renaldo","last_name":"Tirone","email":"rtironev@redcross.org","gender":"Male"},
  {"id":33,"first_name":"Natalee","last_name":"Rodgerson","email":"nrodgersonw@nasa.gov","gender":"Non-binary"},
  {"id":34,"first_name":"Zorana","last_name":"Morgen","email":"zmorgenx@squarespace.com","gender":"Non-binary"},
  {"id":35,"first_name":"Timothy","last_name":"Hedylstone","email":"thedylstoney@scribd.com","gender":"Genderqueer"},
  {"id":36,"first_name":"Tammie","last_name":"Glastonbury","email":"tglastonburyz@fc2.com","gender":"Genderfluid"},
  {"id":37,"first_name":"Gillie","last_name":"McKee","email":"gmckee10@wikia.com","gender":"Genderfluid"},
  {"id":38,"first_name":"Karlee","last_name":"Witherby","email":"kwitherby11@github.io","gender":"Male"},
  {"id":39,"first_name":"Giordano","last_name":"Grimmett","email":"ggrimmett12@infoseek.co.jp","gender":"Male"},
  {"id":40,"first_name":"Ardelia","last_name":"Zamora","email":"azamora13@i2i.jp","gender":"Polygender"},
  {"id":41,"first_name":"Gardie","last_name":"Moodycliffe","email":"gmoodycliffe14@ibm.com","gender":"Bigender"},
  {"id":42,"first_name":"Alexis","last_name":"Di Biasio","email":"adibiasio15@aboutads.info","gender":"Non-binary"},
  {"id":43,"first_name":"Ham","last_name":"Gretham","email":"hgretham16@telegraph.co.uk","gender":"Polygender"},
  {"id":44,"first_name":"Doralyn","last_name":"Jickells","email":"djickells17@seesaa.net","gender":"Non-binary"},
  {"id":45,"first_name":"Martie","last_name":"Aguilar","email":"maguilar18@si.edu","gender":"Non-binary"},
  {"id":46,"first_name":"Gawen","last_name":"Andrysiak","email":"gandrysiak19@goodreads.com","gender":"Agender"},
  {"id":47,"first_name":"Whit","last_name":"Ipwell","email":"wipwell1a@tumblr.com","gender":"Female"},
  {"id":48,"first_name":"Rod","last_name":"Vedenichev","email":"rvedenichev1b@xing.com","gender":"Polygender"},
  {"id":49,"first_name":"Archy","last_name":"Hasling","email":"ahasling1c@tiny.cc","gender":"Polygender"},
  {"id":50,"first_name":"Ursa","last_name":"Bortoluzzi","email":"ubortoluzzi1d@google.com.hk","gender":"Polygender"}];
  render() {
    return (
      <div>
        <Display emp_data={this.employees} one="hello" />
      </div>
    );
  }
}

export default Employee;
