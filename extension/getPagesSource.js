// @author Rob W <http://stackoverflow.com/users/938089/rob-w>
// Demo: var serialized_html = DOMtoString(document);

async function DOMtoString(document_root) {
    var html = '',
        node = document_root.firstChild;

    var output = [];
    while (node) {
        switch (node.nodeType) {
        case Node.ELEMENT_NODE:
            html = node.outerHTML;
            response =  await fetch("http://localhost:1998/",{
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "html":html })
                });
            responseJSON =  await response.json();
            output = responseJSON;

            break;
        }
        node = node.nextSibling;
    }
    // var i = 0
    // for (i = 0; i < output.length; i++) 
    //     console.log(output[i]);
    console.log(output[0])
    return JSON.stringify(output[0]);
}

chrome.runtime.sendMessage({
    action: "getSource",
    source: DOMtoString(document)
});