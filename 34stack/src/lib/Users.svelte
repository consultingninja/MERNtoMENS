<script>
    let users = [];
    let currentError = null;
    const fetchData = ()=>{
        fetch('http://127.0.0.1:8080/users')
        .then((res) =>{
            console.log(res);
            return res.json();
        })
        .then((data)=>{
            console.log(data);
            if(data) users = data ;
        })
        .catch((error)=>{
            currentError = "Error";
            console.log("Error fetching users",error);
        })
    }
    (function(){
        fetchData()
    })()

</script>
<h1>Consulting Ninja</h1>
<h1>Vite + Svelte + Express + Fetch</h1>
<div class="card">
    {#each users as user (user.id)}
        <p>First name: {user.firstName} Last name: {user.lastName} Email: {user.email}</p>
    {:else}
    {#if currentError !== null}
        <p>Failed to load data...</p>
        <input type="button" value="Retry" on:click={fetchData}/>
    {/if}
    {/each}
</div>

