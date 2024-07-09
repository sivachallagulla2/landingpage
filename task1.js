document.addEventListener('DOMContentLoaded', function() {
    // Select all menu items
    var menuItems = document.querySelectorAll('.menu a');
  
    // Loop through each menu item and add click event listener
    menuItems.forEach(function(item) {
      item.addEventListener('click', function(event) {
        // Prevent default behavior of anchor tag
        event.preventDefault();
        
        // Get the href attribute of the clicked menu item
        var targetPage = item.getAttribute('href');
        
        // Redirect to the target page
        window.location.href = targetPage;
      });
    });
  });
  