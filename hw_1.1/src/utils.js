export const formatError = text => `
<span style="color: red;">
    ${text}
</span>
`;

export const html = (id, html) => document.getElementById(id).innerHTML = html;
export const clearHtml = id => html(id, '');
