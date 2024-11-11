const insert = document.getElementById('insert');
insert.style.color = '#fff';
insert.style.backgroundColorcolor = '#45784';
insert.style.fontSize = '20px';
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
<div class ="color">   
<table>
  <tr>
    <th>key </th>
    <th>keyCode </th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key=== " "? "space" : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
</div> 
`;
});