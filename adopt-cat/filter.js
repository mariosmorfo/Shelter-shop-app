/**@features  
 * - **Filtering Functionality**: Filters cat breeds based on user input for country of origin.
 * - **Dynamic Rendering**: Renders cat cards dynamically based on the fetched data and user input.
 * - **User Input Handling**: Captures user input for filtering and resets the filter when requested. 
 *  @technologies
 * - JavaScript (ES6+)
 */

export function filterCats(cats, originInput) {
  const origin = originInput.trim().toLowerCase();

  if ( !origin) return cats;

  return cats.filter(cat => {
    const matchesOrigin = !origin || cat.origin.toLowerCase().includes(origin);
    return  matchesOrigin;
  });
}
