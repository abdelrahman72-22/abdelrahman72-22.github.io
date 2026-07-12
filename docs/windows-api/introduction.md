---
sidebar_position: 1
title: 01. Introduction
---
# Windows API Introduction

The **Windows API (WinAPI)** is the primary programming interface provided by Microsoft Windows.

It allows applications to communicate directly with the operating system and access low-level system services.

---

## Why Learn WinAPI?

Learning WinAPI helps you:

- Build native Windows applications.
- Understand how Windows communicates with user applications.
- Read Microsoft documentation with confidence.
- Learn Windows Internals more easily.
- Build a strong foundation for Malware Development.
- Understand Malware Analysis and Reverse Engineering.

---

## Windows Services

WinAPI provides access to many operating system services, including:

- Process Management
- Thread Management
- Memory Management
- File System
- Registry
- Networking
- Synchronization
- Graphical User Interface (GUI)

---

## WinAPI Layers

Most WinAPI functions do not communicate directly with the Windows kernel.

A typical call flow looks like this:

Application
        │
        ▼
Kernel32.dll
        │
        ▼
Ntdll.dll
        │
        ▼
System Call
        │
        ▼
Windows Kernel

As you continue studying Windows Internals, you will learn what happens at each layer.

---

## WinAPI Building Blocks

The Windows API consists of several core components.

| Component | Purpose |
|-----------|---------|
| Functions | Perform operating system tasks |
| Data Types | Standard Windows types such as `DWORD` and `HANDLE` |
| Structures | Store information passed to WinAPI functions |
| Handles | References to Windows kernel objects |
| Constants | Predefined values and flags |
| Macros | Helper definitions |
| Enumerations | Named constant values |

These components work together to provide access to Windows operating system services.

---

## Documented vs Undocumented APIs

Windows APIs can be divided into two categories.

### Documented APIs

Documented APIs are officially supported by Microsoft and are described in Microsoft Learn.

Examples:

```cpp
CreateFile()
ReadFile()
CreateProcess()
GetSystemInfo()
```

These APIs are stable and should always be preferred.

---

### Undocumented APIs

Undocumented APIs exist inside Windows but are not officially documented.

Examples:

```cpp
NtCreateFile()
NtQueryInformationProcess()
NtCreateThreadEx()
LdrLoadDll()
RtlCreateUserThread()
```

These APIs are widely used in:

- Windows Internals
- Reverse Engineering
- Malware Research
- Security Research

Microsoft may change their implementation between Windows versions.

---

## Microsoft Learn

Microsoft Learn should always be your primary reference.

Whenever you learn a new API, study:

- Function Prototype
- Parameters
- Return Value
- Error Handling
- Remarks
- Example Code

---

## Prerequisites

Before continuing with WinAPI, you should already understand:

- C/C++ Basics
- Functions
- Pointers
- Arrays
- Structures
- Memory Basics

---

## Summary

After reading this chapter, you should understand:

- What WinAPI is
- Why WinAPI is important
- The services provided by WinAPI
- The building blocks of WinAPI
- The difference between Documented and Undocumented APIs
- Why Microsoft Learn should be your primary reference