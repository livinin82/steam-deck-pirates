// Color-code admonition blockquotes ([!NOTE], [!WARNING], etc.)
document.addEventListener('DOMContentLoaded', function() {
  const types = [
    { key: '[!NOTE]', className: 'admonition-note' },
    { key: '[!WARNING]', className: 'admonition-warning' },
    { key: '[!TIP]', className: 'admonition-tip' },
    { key: '[!IMPORTANT]', className: 'admonition-important' },
    { key: '[!CAUTION]', className: 'admonition-caution' }
  ];
  document.querySelectorAll('blockquote').forEach(block => {
    const first = block.querySelector('p, strong, em, span');
    if (first && first.textContent) {
      for (const type of types) {
        if (first.textContent.trim().startsWith(type.key)) {
          block.classList.add(type.className, 'admonition');
          break;
        }
      }
    }
  });
});
