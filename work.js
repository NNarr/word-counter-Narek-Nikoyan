function analyzeText() {
  const text = document.getElementById('inputText').value;
  const letterCount = text.replace(/[^a-zA-Z]/g, '').length;
  const wordCount = text.split(/\s+/).filter(word => word.length > 0).length;
  const sentenceCount = text.split(/[.!?]+/).filter(sentence => sentence.length > 0).length;

  document.getElementById('letterCount').textContent = letterCount;
  document.getElementById('wordCount').textContent = wordCount;
  document.getElementById('sentenceCount').textContent = sentenceCount;
}
