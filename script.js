// Initialize Supabase client
const supabaseUrl = 'https://ensocfuccnprpzuoyqab.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuc29jZnVjY25wcnB6dW95cWFiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNTg1NTQsImV4cCI6MjA2NzYzNDU1NH0.ligSep_VwjTzSMnhVQI-WaU7BYobLY0vgRCfZvvWTHk'; // Replace with your Anon Public Key
const supabase = Supabase.createClient(supabaseUrl, supabaseKey);

// Form submission handler
document.getElementById('dataForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;

    // Save to Supabase
    const { data, error } = await supabase
        .from('submissions')
        .insert([{ name: name }]);

    if (error) {
        document.getElementById('dataOutput').innerText = `Error: ${error.message}`;
    } else {
        document.getElementById('dataOutput').innerText = `Submitted: ${name}`;
    }

    // Clear the form
    document.getElementById('name').value = '';
});
