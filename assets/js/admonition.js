// Color-code admonition blockquotes ([!NOTE], [!WARNING], etc.)

// Color-code admonition blockquotes ([!NOTE], [!WARNING], etc.) and format marker as bold label
// This script replaces the [!TYPE] marker with a bold label for clarity
document.addEventListener('DOMContentLoaded', function() {
  const types = [
    { key: '[!NOTE]', className: 'admonition-note', label: 'Note', icon: 'ℹ️' },
    { key: '[!WARNING]', className: 'admonition-warning', label: 'Warning', icon: '⚠️' },
    { key: '[!TIP]', className: 'admonition-tip', label: 'Tip', icon: '💡' },
    { key: '[!IMPORTANT]', className: 'admonition-important', label: 'Important', icon: '❗' },
    { key: '[!CAUTION]', className: 'admonition-caution', label: 'Caution', icon: '🛑' }
  ];
  document.querySelectorAll('blockquote').forEach(block => {
    const first = block.querySelector('p, strong, em, span');
    if (first && first.textContent) {
      for (const type of types) {
        if (first.textContent.trim().startsWith(type.key)) {
          block.classList.add(type.className, 'admonition');
          // Replace marker with icon and bold label
          const rest = first.textContent.trim().slice(type.key.length).trimStart();
          first.innerHTML = `<span class="adm-icon" style="margin-right:0.4em;">${type.icon}</span><strong>${type.label}:</strong> ${rest}`;
          break;
        }
      }
    }
  });
});
