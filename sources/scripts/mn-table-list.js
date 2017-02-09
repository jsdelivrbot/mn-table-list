document.addEventListener('click', showDetail)

function showDetail(event) {
  const item = event.target.classList.contains('mn-item')
    ? event.target
    : event.target.closest('.mn-item')
  const hasDetail = item
    ? item.querySelector('.mn-item-detail')
    : undefined
  const targetIsAButton = event.target.tagName === 'BUTTON' || (event.target.tagName === 'A' && Boolean(event.target.closest('.mn-item')))

  if (item && hasDetail && !targetIsAButton) {
    const previousOpened = item.closest('.mn-table-list').querySelector('.mn-item.detail-visible')
    if (previousOpened && previousOpened !== item) {
      previousOpened.classList.remove('detail-visible')
    }

    item.classList.add('detail-visible')
    item.blur()
  }
}
