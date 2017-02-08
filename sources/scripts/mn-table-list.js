const details = document.querySelectorAll('.mn-table-list .mn-item-detail')

Array
  .from(details)
  .forEach(detail => {
    const itemButton = detail.closest('.mn-item')
    if (itemButton) {
      itemButton.addEventListener('click', showDetail)
    }
  })

function showDetail() {
  const previousOpened = this.closest('.mn-table-list').querySelector('.mn-item.detail-visible')
  if (previousOpened && previousOpened !== this) {
    previousOpened.classList.remove('detail-visible')
  }

  this.classList.add('detail-visible')
  this.blur()
}
