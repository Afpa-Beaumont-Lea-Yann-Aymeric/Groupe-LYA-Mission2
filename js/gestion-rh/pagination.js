/**
 * @file Manages the pagination of gestion-rh.html
 * @author Aymeric Mary <aymeric.mary.pls@gmail.com>
 */

/**
 * Generate the html pagination
 */
function generatePagination() {
    searchParams.set('p', 1);
    let pagination = '<li class="page-item ' + (currentPage === 1 ? "disabled" : "") + '">\n' +
        '               <a class="page-link" href="?' + searchParams.toString() + '"> << </a>\n' +
        '           </li>\n' +
        '           <li class="page-item ' + (currentPage === 1 ? "disabled" : "") + '">\n' +
        '                <a class="page-link" href="javascript:changePage(-1)"> < </a>' +
        '          </li>';
    for (let i = 1; i <= nbPages; i++) {
        searchParams.set('p', i);
        pagination += '<li class="page-item ' + (i === currentPage ? 'active' : '') + '"><a class="page-link" href="?' + searchParams.toString() + '">' + i + '</a></li>\n';
    }
    searchParams.set('p', nbPages);
    pagination += '<li class="page-item ' + (currentPage === nbPages ? "disabled" : "") + '">\n' +
        '               <a class="page-link" href="javascript:changePage(1)"> > </a>\n' +
        '           </li>\n' +
        '           <li class="page-item ' + (currentPage === nbPages ? "disabled" : "") + '">\n' +
        '                   <a class="page-link" href="?' + searchParams.toString() + '"> >> </a>\n' +
        '          </li>';

    $(".pagination").html(pagination);
    searchParams.delete('p');
}

/**
 * Change the current page
 * @param {number} increment - The value to be incremented on the current page
 * @return {void}
 */
function changePage(increment) {
    let newPage = currentPage + increment;
    if (newPage < 0) newPage = 1;
    if (newPage > nbPages) newPage = nbPages;
    searchParams.set('p', newPage.toString());
    window.location.href = '?' + searchParams.toString();
}