
function HomePage() {
    return (
        <main>
            <div>
                <p>
                    <i class="ri-search-line"></i>
                    <input 
                        type="text" 
                        placeholder="Search for a country..." 
                    />
                </p>
                <input list="region" />
                <datalist id="region">
                    <option value="Africa"/>
                </datalist>
            </div>
        </main>
    )
}

export default HomePage