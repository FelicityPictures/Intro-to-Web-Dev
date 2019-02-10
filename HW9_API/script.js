fetch('https://jsonplaceholder.typicode.com/posts/?userId=1')
  .then(response => response.json())
  .then(data => data.map(({ userId, id, title, body }) => {
    return `
      <div class="post">
        <h2>${title}</h2>
        <p>
          ${body}
        </p>
      </div>
    `;
  }).join(''))
  .then(table => {
    document.querySelector('#content-table').innerHTML = table;
  })

async function doPost(event){
  event.stopPropagation();
  event.preventDefault();

  const titleTextField = document.querySelector('#input-title-text');
  const bodyTextField = document.querySelector('#input-body-text');
  const errorMessage = document.querySelector('#error-message');
  if(titleTextField.value == "" || bodyTextField.value == ''){
    errorMessage.textContent = "Please give your post a title and input body text."
    return;
  }
  let formData = new FormData(event.target);
  formData.append('user', 1);
  let jsonObject = {};
  for (const [key, value]  of formData.entries()) {
      jsonObject[key] = value;
  }
  titleTextField.value = '';
  bodyTextField.value = '';
  formData.append('user', 1);
  const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(jsonObject),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json());
  console.log("data: ");
  console.log(data);

  errorMessage.textContent = "";

  // Adds your input to page
  let div = document.createElement("div");
  div.classList.add('post');
  let h2 = document.createElement("h2");
  h2.textContent = formData.get('title');
  let p = document.createElement("p");
  p.textContent = formData.get('body');
  div.appendChild(h2);
  div.appendChild(p);
  document.querySelector('#content-table').appendChild(div);
}

document.querySelector('#user-data').addEventListener('submit', doPost);
