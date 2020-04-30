<script>
    //<![CDATA[                   
    function TOCindrak() {
        var TOCindrak = i = headlength = gethead = 0;
        headlength = document.getElementById("post-toc").querySelectorAll("h3, h4").length;
        for (i = 0; i < headlength; i++) {
            gethead = document.getElementById("post-toc").querySelectorAll("h3, h4")[i].textContent;
            document.getElementById("post-toc").querySelectorAll("h3, h4")[i].setAttribute("id", "point" + i);
            TOCindrak = "<li><a href='#point" + i + "'>" + gethead + "</a></li>";
            document.getElementById("TOCindrak").innerHTML += TOCindrak;
        }
    }

function mbtToggle() {
    var mbt = document.getElementById('TOCindrak');
    if (mbt.style.display === 'none') {
        mbt.style.display = 'block';
    } else {
        mbt.style.display = 'none';
    }
}
//]]>             
</script>
