---
sidebar_position: 4
title: 04. Windows Objects & Handles
---

# Windows Objects & Handles

Windows is an **object-based operating system**.

Most system resources are represented internally as **Kernel Objects**. User-mode applications cannot access these objects directly. Instead, they interact with them through **Handles**.

Understanding Objects and Handles is one of the most important concepts in Windows Internals.

---

## Kernel Objects

A **Kernel Object** is a data structure managed by the Windows kernel that represents a system resource.

Common examples include:

- Process
- Thread
- File
- Token
- Event
- Mutex
- Semaphore
- Timer
- Job
- Section (File Mapping)

Kernel Objects exist in **Kernel Memory** and cannot be accessed directly from User Mode.

---

## Handles

A **Handle** is an opaque value returned to a user-mode application that references a Kernel Object.

Applications never interact with the object itself.

Instead, Windows manages the relationship between the application and the object.

```text
User Mode
     │
     ▼
 Handle
     │
     ▼
Handle Table
     │
     ▼
Kernel Object
```

Example:

```cpp
HANDLE hFile = CreateFile(...);
```

`hFile` is **not** a pointer to the file.

It is simply an identifier managed by Windows.

---

## Handle Table

Every process owns its own **Handle Table**.

Example:

```text
Chrome.exe

Handle Table

0x80 → File
0x84 → Event
0x88 → Process
```

Handle values are local to each process.

For example, handle `0x80` in one process is completely unrelated to handle `0x80` in another process.

---

## Create* vs Open* APIs

Most Windows objects have two families of APIs.

### Create*

Creates a new object.

Examples:

```cpp
CreateProcess()
CreateThread()
CreateFile()
CreateMutex()
CreateEvent()
```

---

### Open*

Opens an existing object.

Examples:

```cpp
OpenProcess()
OpenThread()
OpenMutex()
OpenEvent()
```

Both API families return a `HANDLE`.

---

## Common Kernel Objects

| Object | Common API |
|---------|------------|
| Process | `CreateProcess()` / `OpenProcess()` |
| Thread | `CreateThread()` / `OpenThread()` |
| File | `CreateFile()` |
| Token | `OpenProcessToken()` |
| Event | `CreateEvent()` |
| Mutex | `CreateMutex()` |
| Semaphore | `CreateSemaphore()` |
| Timer | `CreateWaitableTimer()` |
| Job | `CreateJobObject()` |
| Section | `CreateFileMapping()` |

---

## Access Masks

Every handle is associated with an **Access Mask** that defines which operations are allowed.

Examples:

```text
PROCESS_VM_READ
PROCESS_VM_WRITE
PROCESS_CREATE_THREAD
PROCESS_TERMINATE
SYNCHRONIZE
```

Access masks are stored internally as **bitmasks**.

---

## Handle Attributes

Handles may also contain additional attributes.

Common attributes include:

- Inheritable
- Protect From Close
- Audit On Close

These attributes can be modified using:

```cpp
SetHandleInformation()
```

---

## Object Lifetime

Kernel Objects use **Reference Counting**.

When a new handle is created:

```text
Reference Count++
```

When a handle is closed:

```cpp
CloseHandle(hObject);
```

```text
Reference Count--
```

When the reference count reaches zero, Windows automatically destroys the object.

---

## Closing Handles

Always close handles when they are no longer needed.

Example:

```cpp
HANDLE h = CreateEvent(...);

...

CloseHandle(h);
```

Failing to close handles results in **Handle Leaks**.

---

## Handle Leaks

If handles are never released:

- Handle count increases
- Kernel resources remain allocated
- Memory usage grows
- The application may eventually fail

Tools such as **Process Explorer** can help detect handle leaks.

---

## Pseudo Handles

Windows also provides **Pseudo Handles**.

Examples:

```cpp
GetCurrentProcess()

GetCurrentThread()
```

Pseudo Handles are interpreted directly by the kernel and **must not** be closed.

Incorrect:

```cpp
CloseHandle(GetCurrentProcess());
```

---

## OpenProcess()

`OpenProcess()` is one of the most commonly used WinAPI functions.

```cpp
HANDLE hProcess = OpenProcess(
    PROCESS_QUERY_INFORMATION,
    FALSE,
    pid
);
```

Parameters:

| Parameter | Description |
|-----------|-------------|
| Desired Access | Requested permissions |
| Inherit Handle | Whether child processes inherit the handle |
| Process ID | Target process ID |

Returns:

- A valid `HANDLE` on success.
- `NULL` on failure.

Always verify the returned handle before using it.

---

## Error Handling

If `OpenProcess()` or any WinAPI function fails, retrieve the error code immediately.

```cpp
HANDLE h = OpenProcess(...);

if (h == NULL)
{
    DWORD error = GetLastError();
}
```

---

## Common Use Cases

Objects and Handles are fundamental in:

- Windows Internals
- Malware Development
- Malware Analysis
- Reverse Engineering
- Digital Forensics
- Debugging
- System Monitoring

---

## Summary

After completing this chapter, you should understand:

- What a Kernel Object is
- What a Handle represents
- The purpose of the Handle Table
- The difference between `Create*` and `Open*` APIs
- Access Masks
- Handle Attributes
- Reference Counting
- Handle Leaks
- Pseudo Handles
- Proper use of `CloseHandle()`