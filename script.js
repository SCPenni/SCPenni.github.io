// Task 0: Document Ready Function - Test jQuery
$(document).ready(function() {
    console.log("jQuery is ready!");


    // ============================================
    // PART 1: GETTING STARTED
    // ============================================

    // Task 1: Selectors & CSS
    $("#changeContentBtn").click(function() {
        // Select by ID and change text
        $("#para1").text("Text changed using jQuery .text() method!");

        // Select by class and change HTML
        $(".myClass").html("<strong>HTML changed with .html() method!</strong>");

        // Select by tag and change CSS
        $("span").css({
            "color": "blue",
            "font-size": "20px",
            "font-weight": "bold"
        });
    });


    // ============================================
    // PART 2: JQUERY EFFECTS
    // ============================================

    // Task 2: Visibility Methods
    $("#hideBtn").click(function() {
        $("#visibilityPara").hide();
    });

    $("#showBtn").click(function() {
        $("#visibilityPara").show();
    });

    $("#toggleBtn").click(function() {
        $("#visibilityPara").toggle();
    });


    // Task 3: Fade Methods
    $("#fadeInBtn").click(function() {
        $("#myImage").fadeIn(1000);
    });

    $("#fadeOutBtn").click(function() {
        $("#myImage").fadeOut(1000);
    });

    $("#fadeToggleBtn").click(function() {
        $("#myImage").fadeToggle(1000);
    });


    // Task 4: Slide Methods
    $("#slideUpBtn").click(function() {
        $("#panel").slideUp(500);
    });

    $("#slideDownBtn").click(function() {
        $("#panel").slideDown(500);
    });

    $("#slideToggleBtn").click(function() {
        $("#panel").slideToggle(500);
    });


    // ============================================
    // PART 3: DOM MANIPULATION
    // ============================================

    // Task 5: Add & Remove Elements
    let itemCount = 2;

    $("#addBtn").click(function() {
        itemCount++;
        $("#myList").append("<li>Item " + itemCount + "</li>");
    });

    $("#prependBtn").click(function() {
        itemCount++;
        $("#myList").prepend("<li>Item " + itemCount + " (added at start)</li>");
    });

    $("#removeBtn").click(function() {
        $("#myList li:last").remove();
    });


    // Task 6: Modifying Attributes
    let imageToggle = true;

    $("#changeImgBtn").click(function() {
        if (imageToggle) {
            $("#changeableImg").attr("src", "https://via.placeholder.com/150/2196F3/ffffff?text=Image+2");
        } else {
            $("#changeableImg").attr("src", "https://via.placeholder.com/150/FF5722/ffffff?text=Image+1");
        }
        imageToggle = !imageToggle;
    });

    $("#changeLinkBtn").click(function() {
        $("#myLink").attr("href", "https://google.com");
        $("#myLink").text("Google Link");
    });


    // Task 7: Form Interaction
    $("#nameInput").on("input", function() {
        let nameValue = $(this).val();
        if (nameValue === "") {
            $("#nameDisplay").text("Type above...");
        } else {
            $("#nameDisplay").text(nameValue);
        }
    });

    $("#emailInput").on("input", function() {
        let emailValue = $(this).val();
        if (emailValue === "") {
            $("#emailDisplay").text("Type above...");
        } else {
            $("#emailDisplay").text(emailValue);
        }
    });


    // ============================================
    // PART 4: ANIMATIONS
    // ============================================

    // Task 8: Basic Animation
    $("#basicAnimateBtn").click(function() {
        $("#box").animate({
            width: "200px",
            height: "200px",
            left: "100px"
        }, 1000);
    });

    $("#resetBoxBtn").click(function() {
        $("#box").css({
            width: "100px",
            height: "100px",
            left: "0px",
            top: "0px",
            opacity: "1"
        });
    });


    // Task 9: Sequential Animations
    $("#sequentialBtn").click(function() {
        // Stop any ongoing animations first
        $("#box").stop(true, true);

        // Reset the box to original state
        $("#box").css({
            width: "100px",
            height: "100px",
            left: "0px",
            top: "0px",
            opacity: "1"
        });

        // Chain animations in sequence
        $("#box")
            .animate({ left: "300px" }, 1000) // Move right
            .animate({ top: "200px" }, 1000) // Move down
            .animate({ width: "50px", height: "50px" }, 1000) // Shrink
            .animate({ left: "0px", top: "0px", width: "100px", height: "100px" }, 1000); // Return to original
    });


    // Task 10: Combined Animation
    $("#combinedBtn").click(function() {
        // Stop any ongoing animations
        $("#box").stop(true, true);

        // Reset the box
        $("#box").css({
            width: "100px",
            height: "100px",
            left: "0px",
            top: "0px",
            opacity: "1"
        });

        // Animate multiple properties at once
        $("#box").animate({
            width: "250px",
            height: "250px",
            opacity: 0.5,
            left: "200px",
            top: "100px"
        }, 1500);
    });


    // ============================================
    // PART 5: MINI PROJECT
    // ============================================

    // Task 11: Accordion Menu

    // Hide all accordion content initially
    $(".accordion-content").hide();

    // Handle clicks on accordion headers
    $(".accordion-header").click(function() {
        // Toggle the clicked section's content
        $(this).next(".accordion-content").slideToggle(400);

        // Close all other sections
        $(".accordion-content").not($(this).next()).slideUp(400);
    });

});