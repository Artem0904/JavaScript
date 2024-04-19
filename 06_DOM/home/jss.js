const objects = [];
 
function addObject() {
  const type = document.getElementById("objectType").value;
  const name = document.getElementById("objectName").value;
  const value = document.getElementById("objectValue").value;
 
  objects.push({ type, name, value });
 
  displayObjects(objects);
  document.getElementById("objectForm").reset();
}
 
function displayObjects(objList) {
  const table = document.getElementById("objectTable");

  table.innerHTML = "<tr><th>Type</th><th>Name</th><th>Value</th></tr>";
 
  objList.forEach(obj => {
    const row = table.insertRow();
    const type = row.insertCell(0);
    const name = row.insertCell(1);
    const value = row.insertCell(2);
 
    type.textContent = obj.type;
    name.textContent = obj.name;
    value.textContent = obj.value;
  });
}
 
function searchObjects() {
  const searchInput = document.getElementById("searchInput").value.toLowerCase();
  const filteredObjects = objects.filter(obj => obj.name.toLowerCase().includes(searchInput));
  displayObjects(filteredObjects);
}