
function webcli(output_element,input_element) {
    if (!jQuery) { console.log("jQuery needed for WebCli"); return false; }

    var on_readline=false;
    var input;
    $(output_element).addClass("webcli");
    var output=$("<div></div>").appendTo(output_element);
    if (input_element) input=$(input_element);
    else  input=$("<div></div>").appendTo(output_element);

    output.addClass("webcli_output");
    input.addClass("webcli_input");

    var prompt=$("<span class=webcli_prompt></span>").appendTo(input);
    var inputfield=$("<input autofocus=true placeholder='type here..' class=webcli_inputfield></input>").appendTo(input);
    inputfield.focus();

    inputfield.on("keypress",function (e) {
	if (e.which==13 && on_readline) 
	    if(on_readline(inputfield.val())) { inputfield.val(""); }
    });

    this.scroll_bottom = function () {
	$("html, body").stop().animate({ scrollTop: $(document).height() }, 500);
    }

    this.set_prompt = function(line) {
	prompt.text(line);
    }

    this.add_html = function(line) {
	$("<div></div>").html(line).appendTo(output);;
	this.scroll_bottom();
    }

    this.add_text = function(line) {
	$("<div></div>").text(line).appendTo(output);;
	this.scroll_bottom();
    }

    this.on_readline = function(f) {
	on_readline=f;
    }
    
    this.password_mode = function(b) {
	inputfield.attr("type",b?"password":"text");
    }
    
    return this;
}

